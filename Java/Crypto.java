package Java;

import java.util.Scanner;

public class Crypto {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Input text here: ");
        String message = input.nextLine();
        System.out.print("Input key (integer): ");
        int key = input.nextInt();
        System.out.println("Ciphertext: " + encryptString(message, key, 3));
        input.close();
    }

    // Parameter: "What's up?"
    // Capitalize, remove spaces, remove punctuation
    // Return: "WHATSUP"
    public static String normalizeText(String message) {
        String capital = message.toUpperCase();
        String remove = capital.replace(" ", ""); // remove whitespaces
        // Remove any punctuation (. , : ; ’ ” ! ? ( ) ) + white space
        String[] punctuation = { ".", ",", ":", ";", "'", "\"", "!", "?", "(", ")" };
        for (String i : punctuation) {
            remove = remove.replace(i, "");
        }
        return remove;
    }

    public static String caeserify(String message, int key) {
        String result = "";
        for (int i = 0; i < message.length(); i++) {
            int numChar = (int) message.charAt(i);
            numChar = numChar + key;
            // 65 - 90 = "A" - "Z", wrapping around effect
            if (numChar < 65) {
                numChar = numChar + 26;
            } else if (numChar > 90) {
                numChar = numChar - 26;
            } // if 65 <= numChar <= 90 then numChar = numChar
            char currChar = (char) numChar;
            result = result + currChar;
        }
        return result;

    }

    // Parameters: "HITHERE", 2
    // Pad with "x"
    // Returns "HI TH ER Ex"
    public static String groupify(String message, int size) {
        // Adding the "x"s
        int n = message.length();
        int x = n % size;
        int numx = 0;
        if (x == 0) { // no need to append any "x"
        } else {
            numx = size - (x); // number of x to append to string
        }
        for (int i = 0; i < numx; i++) {
            message = message + "x";
        }
        // Splitting the message
        String group = "";
        int interval = 0;
        for (int i = 0; i < (n + numx); i++) {
            // to add spaces in size intervals
            if (interval == size) {
                group = group + " " + message.charAt(i);
                interval = 1;
            } else {
                group = group + message.charAt(i);
                interval += 1;
            }
        }
        return group;
    }

    // Parameters: String to be encrypted, an integer shift value, and a code group
    // size
    // Returns: Cyphertext
    public static String encryptString(String message, int shift, int size) {
        String ciphertext = normalizeText(message);
        ciphertext = caeserify(ciphertext, shift);
        ciphertext = groupify(ciphertext, size);
        return ciphertext;
    }
}