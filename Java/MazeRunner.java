package Java;

import java.util.Scanner;

public class MazeRunner {
    static Maze myMap = new Maze();
    public static final Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        intro();
        gameplay();
    }

    public static void intro() {
        System.out.println("Welcome to Maze Runner!\nHere is your current position:");
        myMap.printMap();
    }

    public static String userMove() {
        String direction = "";
        while (!"R".equals(direction) && !"L".equals(direction) && !"U".equals(direction) && !"D".equals(direction)) {
            if ("".equals(direction)) { // do not print anything because it's the first time the user inputs direction
            } else { // to prompt user to input valid direction
                System.out.println("Please input a valid direction");
            }
            System.out.print("Where would you like to move? (R, L, U, D): ");
            direction = input.nextLine();
        }
        return direction;
    }

    public static void gameplay() {
        String direction = "";
        while (!myMap.didIWin()) {
            direction = userMove();
            if ("R".equals(direction) && myMap.canIMoveRight()) {
                myMap.moveRight();
            } else if ("L".equals(direction) && myMap.canIMoveLeft()) {
                myMap.moveLeft();
            } else if ("U".equals(direction) && myMap.canIMoveUp()) {
                myMap.moveUp();
            } else if ("D".equals(direction) && myMap.canIMoveDown()) {
                myMap.moveDown();
            } else {
                System.out.println("Sorry, you’ve hit a wall.");
            }
        }
    }
}