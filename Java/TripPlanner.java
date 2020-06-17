package Java;

import java.util.Scanner;

public class TripPlanner {
    private static final Scanner input = new Scanner(System.in);

    public static void main(final String[] args) {
        greeting();
        timeBud();
        hacker();
    }

    public static void greeting() {
        System.out.println("Welcome to Vacation Planner!");
        System.out.print("What is your name? ");
        final String name = input.nextLine();
        System.out.print("Nice to meet you " + name + ", where are you travelling to? ");
        final String place = input.nextLine();
        System.out.println("Great! " + place + " sounds like a great trip");
    }

    public static void timeBud() {
        System.out.print("How many days are you going to spend travelling? ");
        final int days = input.nextInt();
        System.out.print("How much money, in USD, are you planning to spend on your trip? ");
        final int money = input.nextInt();
        System.out.print("What is the three letter currency symbol for your travel destination? ");
        final String currency = input.next();
        System.out.print("How many " + currency + " are there in 1 USD? ");
        final double exchange = input.nextDouble();

        // Calculations
        final int hours = days * 24;
        final int minutes = hours * 60;
        final double perDay = money / days * 1.00; // to make 2 decimal places
        final double convertMoney = money * exchange;
        // Making 2 decimal places by *100, convert to integer, then /100
        final double convertP = convertMoney / days * 100;
        final int convertPerD = (int) convertP;
        final double convertPerDay = convertPerD / 100.0;

        System.out.println("If you are travelling for " + days + " days that is the same as " + hours + " hours or "
                + minutes + " minutes");
        System.out.println("If you are going to spend $" + money + " USD that means per day you can spend up to $"
                + perDay + " USD");
        System.out.println("Your total budget in " + currency + " is " + convertMoney + " " + currency
                + ", which per day is " + convertPerDay + " " + currency);
    }

    public static void timeDiff() {
    }

    public static void countryArea() {
    }

    public static void hacker() {
        System.out.println("Now we are going to calculate the distance between your home and your travel destination");
        System.out.print("Longitude of home? ");
        double lo1 = input.nextDouble();
        System.out.print("Latitude of home? ");
        double la1 = input.nextDouble();
        System.out.print("Longitude of destination? ");
        double lo2 = input.nextDouble();
        System.out.print("Latitude of destination? ");
        double la2 = input.nextDouble();

        // Calculations
        double h = Math.pow((Math.sin((la2 - la1) / 2)), 2)
                + Math.cos(la1) * Math.cos(la2) * Math.pow((Math.sin((lo2 - lo1) / 2)), 2);
        // radius of Earth = 6371 km
        double d = 2 * 6371 * Math.asin(Math.sqrt(h));
        // convert to 2 decimal places
        int di = (int) (d * 100); // (d*100) otherwise (int)d will be calc first then only multiplied by 100
        double dis = di / 100.0;
        System.out.println("Distance: " + dis + " km");
    }
}