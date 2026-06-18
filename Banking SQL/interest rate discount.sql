BEGIN
    FOR cust_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            'Discount applied for Customer ID: ' ||
            cust_rec.CustomerID
        );
    END LOOP;

    COMMIT;
END;
/