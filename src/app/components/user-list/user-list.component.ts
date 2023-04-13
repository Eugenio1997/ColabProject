import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit {


  displayedColumns: string[] = ['Name','Gender','Location','Email','Dob', 'Phone'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(
    private _userService: UserService,
    private _titleService:Title,
    private _router: Router
    ) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit(): void {
    console.log('USER LIST');
    this._titleService.setTitle('Userlist');
    this.getData();
  }

  public goBack(){
    this._router.navigate(['/welcome'])
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource();
  }
  private getData(){
    this._userService.getApiUsers()
      .subscribe( (resp: any ) => {
        console.log(resp);
        this.dataSource.data = resp.results;
        this.dataSource.paginator = this.paginator;
      });
  }

}


