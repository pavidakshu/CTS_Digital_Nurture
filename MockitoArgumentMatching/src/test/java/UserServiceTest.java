import org.junit.Test;

public class UserServiceTest {

    @Test
    public void testArgumentMatching() {

        UserService mockService = mock(UserService.class);

        mockService.saveUser("Pavi", 22);

        verify(mockService).saveUser(eq("Pavi"), anyInt());
    }
}
