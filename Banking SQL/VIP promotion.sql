BEGIN
    FOR cust_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = cust_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            'Customer ID ' || cust_rec.CustomerID ||
            ' promoted to VIP.'
        );
    END LOOP;

    COMMIT;
END;
