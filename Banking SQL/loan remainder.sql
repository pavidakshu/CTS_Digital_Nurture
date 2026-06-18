BEGIN
    FOR loan_rec IN (
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID ' ||
            loan_rec.CustomerID ||
            ' has a loan due on ' ||
            TO_CHAR(loan_rec.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/