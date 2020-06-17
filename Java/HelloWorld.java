package Java;

import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.print("Hello ");
        getName();
    }

    public static void getName() {
        Scanner input = new Scanner(System.in); // open the scanner
        System.out.println("Welcome!");
        System.out.print("What is your name? ");
        String name = input.nextLine(); // so that user can input name with spaces
        System.out.println("How old are you " + name + "?");
        int age = input.nextInt();
        System.out.println("What a coincidence! I'm " + age + " too!");
        input.close(); // close the scanner
    }
}