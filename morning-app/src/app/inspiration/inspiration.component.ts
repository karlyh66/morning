import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import * as angular from "angular";

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  constructor() { }

  quotes = [
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "No matter what you're going through, there's a light at the end of the tunnel. - Demi Lovato",
    "Do things for people not because of who they are or what they do in return, but because of who you are. - Harold S. Kushner",
    "You can accomplish by kindness what you cannot by force. - Pubilius Syrus",
    "A wise man changes his mind, a fool never will. - Spanish proverb",
    "All things are difficult before they are easy. - Thomas Fuller",
    "Good things take time. - John Wooden",
    "In any given moment we have two options: to step forward into growth or step back into safety. - Abraham Maslow",
    "You always gain by giving love. - Reese Witherspoon",
    "Love yourself first and everything falls into line. - Lucille Ball",
    "What we think, we become. - Buddha",
    "No act of kindness, no matter how small, is ever wasted. - Aesop",
    "There is nothing impossible to him who will try. - Alexander the Great",
    "The best preparation for tomorrow is doing your best today. - H Jackson Brown, Jr.",
    "If opportunity doesn’t knock, build a door. - Milton Berle",
    "When you have a dream, you’ve got to grab it and never let go. - Carol Burnett",
    "It is never too late to be what you might have been. - George Eliot",
    "I’ve been absolutely terrified every moment of my life - and I’ve never let it keep me from doing a single thing I wanted to do. - Georgia O’Keeffe",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong. - Ella Fitzgerald",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "No legacy is so rich as honesty. - Shakespeare",
    "Try to be a rainbow in someone else's cloud. - Maya Angelou",
    "Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss",
    "The most wasted of days is one without laughter. - E.E. Cummings",
    "You must do the things you think you cannot do. - Eleanor Roosevelt",
    "It isn't where you came from. It's where you're going that counts. - Ella Fitzgerald",
    "Stay close to anything that makes you glad you are alive. - Hafez",
    "Happiness often sneaks in through a door you didn't know you left open. - John Barrymore",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Let us make our future now, and let us make our dreams tomorrow's reality. - Malala Yousafzai",
    "Honesty is the first chapter in the book of wisdom. - Thomas Jefferson",
    "Honesty is the cornerstone of all success, without which confidence and ability to perform shall cease to exist.",
    "The high road is always respected. Honesty and integrity are always rewarded. - Scott Hamilton"
];

  ngOnInit() {
  }

  index = Math.floor(Math.random()* this.quotes.length);

}
