import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getTransactions } from '../transactions';
import { txns } from '../bank';

@Component({
  selector: 'app-banktable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './banktable.component.html'
})
export class BanktableComponent implements OnInit {

  transactions: any[] = [];
  displayedTransactions: any[] = [];
  selectedDate: string = '';

  ngOnInit(): void {
    this.transactions = this.getTransactions();
    this.displayedTransactions = [...this.transactions];
  }

  getTransactions() {
    return txns;
  }

  filterByDate(): void {
    if (!this.selectedDate) return;

    this.displayedTransactions = this.transactions.filter(
      txn => txn.date === this.selectedDate
    );
    
  }

  sortByAmount(): void {
    this.displayedTransactions = [...this.displayedTransactions].sort(
      (a, b) => a.amount - b.amount
    );
  }
}