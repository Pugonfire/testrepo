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

    public static int navigatePit(String direction) {
        String jump = "";
        int moves = 0;
        System.out.print("Watch out! There's a pit ahead, jump it? (Y/N): ");
        while (!"Y".equalsIgnoreCase(jump) && !"N".equalsIgnoreCase(jump)) {
            if ("".equals(jump)) { // do not print out prompt
            } else {
                System.out.println();
                System.out.print("Please input a valid choice (Y/N): ");
            }
            jump = input.nextLine();
        }
        if ("Y".equalsIgnoreCase(jump)) {
            myMap.jumpOverPit(direction);
            moves = 1; // account for movement
        } else {
            System.out.println("You chose not to jump over pit");
            // moves = 0
        }
        return moves;
    }

    public static void movesMessage(int moves) {
        if (moves == 50) {
            System.out.println("Warning: You have made 50 moves, you have 50 remaining before the maze exit closes");
        } else if (moves == 75) {
            System.out.println("Alert! You have made 75 moves, you only have 25 moves left to escape.");
        } else if (moves == 90) {
            System.out.println("DANGER! You have made 90 moves, you only have 10 moves left to escape!");
        } else if (moves == 100) {
            System.out.println("Oh no! You took too long to escape, and now the maze exit is closed FOREVER >:[");
        } else if (moves > 100) {
            System.out.println("Sorry, but you didn't escape in time- you lose!");
            System.exit(0);
        } else if (myMap.didIWin() && moves < 100) {
            System.out.println("and you did it in " + moves + " moves");
        }
    }

    public static void gameplay() {
        String direction = "";
        int moves = 0;
        while (!myMap.didIWin()) {
            direction = userMove();
            if ("R".equals(direction) && myMap.canIMoveRight()) {
                myMap.moveRight();
                moves++;
            } else if ("L".equals(direction) && myMap.canIMoveLeft()) {
                myMap.moveLeft();
                moves++;
            } else if ("U".equals(direction) && myMap.canIMoveUp()) {
                myMap.moveUp();
                moves++;
            } else if ("D".equals(direction) && myMap.canIMoveDown()) {
                myMap.moveDown();
                moves++;
            } else if (myMap.isThereAPit(direction)) {
                moves = moves + navigatePit(direction);
            } else {
                System.out.println("Sorry, you’ve hit a wall.");
            }
            movesMessage(moves);
        }
        System.out.println("Congrats, you have escaped the maze...");
        movesMessage(moves);
    }
}