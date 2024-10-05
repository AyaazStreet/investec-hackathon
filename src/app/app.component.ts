import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ground Zero';
  
  isPlusIcon: boolean = true; 
  balance: string;

  constructor() {
    this.balance = this.generateRandomBalance();
    this.generateRandomCards(5); // Generate 10 random cards
  }

 recentTransactions = this.generateRandomTransactions();

 private generateRandomTransactions() {
   const transactions = [];
   const descriptions = ['Payment Received', 'Groceries', 'Utilities Bill', 'Salary', 'Rent Payment', 'Online Shopping', 'Coffee Shop', 'Gym Membership'];

   for (let i = 0; i < 5; i++) {
     const amount = this.getRandomAmount();
     const description = descriptions[Math.floor(Math.random() * descriptions.length)];
     const date = new Date();
     date.setDate(date.getDate() - Math.floor(Math.random() * 30)); 

     transactions.push({ date, description, amount });
   }

   return transactions;
 }

 private getRandomAmount() {
   return (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 500) + 100; 
 }


 generateRandomBalance(): string {
   const randomAmount = (Math.random() * 100000).toFixed(2);
   return `${this.formatCurrency(randomAmount)} ZAR`;
 }

 formatCurrency(amount: string): string {
   const parts = amount.split(".");
   const integerPart = parts[0];
   const decimalPart = parts[1];

   const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return `${formattedInteger}${decimalPart ? '.' + decimalPart : ''}`;
 }


 cards: { name: string; amount: number }[] = [];


 generateRandomCards(count: number) {
  const names = [
    'Dude', // The Big Lebowski
    'Lloyd Christmas', // Dumb and Dumber
    'Ferris Bueller', // Ferris Bueller's Day Off
    'Groot', // Guardians of the Galaxy
    'Shrek', // Shrek
    'Peter Venkman', // Ghostbusters
    'Ace Ventura', // Ace Ventura: Pet Detective
    'Carl Spackler', // Caddyshack
    'Beetlejuice', // Beetlejuice
    'Rufio', // Hook
    'Mike Wazowski', // Monsters, Inc.
    'The Mask', // The Mask
    'Borat', // Borat
    'Forrest Gump', // Forrest Gump
    'Zoolander', // Zoolander
  ];

  const shuffledNames = names.sort(() => 0.5 - Math.random());

  // Get the first 'count' unique names
  const uniqueNames = shuffledNames.slice(0, count);

  for (const name of uniqueNames) {
    const randomAmount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
    this.cards.push({ name, amount: randomAmount });
  }
}
 }
