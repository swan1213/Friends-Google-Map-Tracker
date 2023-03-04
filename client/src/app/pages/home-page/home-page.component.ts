import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPagination } from 'src/app/core/utils/pagination.utils'
import { Friend } from 'src/app/features/friends/models/friend';
import { FriendApiService } from 'src/app/features/friends/services/friend-api.service';
import { BehaviorSubject, combineLatest, debounceTime,
  EMPTY, interval, Subject, switchMap,
  takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  friends = new BehaviorSubject<Friend[]>([]);
  polling = new BehaviorSubject<boolean>(false);
  loading = new BehaviorSubject<boolean>(false);
  page = new BehaviorSubject<number>(0);
  search = new BehaviorSubject<string>('');

  private destroyed = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: FriendApiService
  ) {
    this.init();
    this.poll();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: ({ search = '', page = 1 }) => {
        this.search.next(search);
        const pageNumber = getPagination(page);
        this.page.next(pageNumber);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  private init() {
    //load initial friends and respond to page no & search term changes
    combineLatest({ page: this.page.asObservable(), search: this.search.asObservable() })
      .pipe(
        debounceTime(300),
        tap(() => this.loading.next(true)),
        switchMap(({ page, search }) => this.api.getFirends(search, page)),
        takeUntil(this.destroyed)
      )
      .subscribe({
        next: (friends) => {
          this.friends.next(friends);
          this.loading.next(false);
          this.polling.next(true);
        },
      });
  }

  private poll() {
    // poll every 5 seconds for location change
    const interval$ = this.polling.asObservable().pipe(
      switchMap((isPolling) => (isPolling ? interval(5000) : EMPTY))
    );

    interval$
      .pipe(
        tap(() => this.loading.next(true)),
        switchMap(() => 
          this.api.getFirends(this.search.value, this.page.value)
        ),
        takeUntil(this.destroyed)
      )
      .subscribe({
        next: (friends) => {
          this.friends.next(friends);
          this.loading.next(false);
        },
      });
  }

}
