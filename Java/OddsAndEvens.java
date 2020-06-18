package Java;

import java.util.Random;
import java.util.Scanner;

public class OddsAndEvens {
    public static final Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        final String div = "--------------------------------";
        String name = name();
        String oe = choose(name);
        System.out.println(div);
        System.out.println("");
        int[] play = play();
        System.out.println(div);
        System.out.println("");
        result(name, oe, play);
        System.out.println(div);
    }

    public static String name() {
        System.out.println("Let's play a game called \"Odds and Evens\"");
        System.out.print("What is your name? ");
        String name = input.nextLine();
        return name;
    }

    public static String choose(String name) {

        String oe;
        System.out.print("Hi " + name + ", which do you choose? (O)dds or (E)vens? ");
        final String choice = input.nextLine();
        if (choice.equals("O")) {
            oe = "Odd";
            System.out.println(name + " has picked " + oe + "! The computer will be odds");

        } else if (choice.equals("E")) {
            oe = "Even";
            System.out.println(name + " has picked " + oe + "! The computer will be odds");

        } else {
            System.out.println("Please choose either \"O\" for odd or \"E\" for even. ");
            oe = "nil";
        }
        return oe;
    }

    public static int[] play() {
        System.out.print("How many \"fingers\" do you put out? ");
        int human = input.nextInt();
        Random rand = new Random();
        int computer = rand.nextInt(6);
        // return two values
        int[] play = { human, computer };

        System.out.println("The computer plays " + computer + " \"fingers\".");
        return play;
    }

    public static void result(String name, String oe, int[] play) {
        int ans = play[0] + play[1];
        System.out.println(play[0] + " + " + play[1] + " = " + ans);
        // nested for loops for 4 cases, could use case?
        if (ans % 2 == 0) {
            System.out.println(ans + " is... even!");
            if (oe == "Even") {
                System.out.println("That means " + name + " wins! :)");
            } else {
                System.out.println("That means " + name + " loses! :(");
            }
        } else {
            System.out.println(ans + " is... odd!");
            if (oe == "Odd") {
                System.out.println("That means " + name + " wins!");
            } else {
                System.out.println("That means " + name + " loses!");
            }
        }
    }
}