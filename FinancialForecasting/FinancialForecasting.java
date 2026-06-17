public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double predictFutureValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive call
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000; // Initial amount
        double growthRate = 0.10;    // 10% growth rate
        int years = 5;

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.println("Current Value: " + currentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.println("Predicted Future Value: " + futureValue);
    }
}