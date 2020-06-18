package Java;

import java.util.Scanner;

public class Decrypto {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Input Ciphertext here: ");
        String message = input.nextLine();
        System.out.print("Input key (integer): ");
        int key = input.nextInt();
        System.out.println("Text: ");
        input.close();
        System.out.println(decrypt(message, key));
    }

    public static String decrypt(String ciphertext, int key) {
        // intermediate to remove whitespace and pad "x"
        String intermediate = ciphertext.replace("x", "");
        intermediate = intermediate.replace(" ", "");
        // Reverse Caeser cypher
        String result = "";
        for (int i = 0; i < intermediate.length(); i++) {
            int numChar = (int) intermediate.charAt(i);
            numChar = numChar - key;
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
}