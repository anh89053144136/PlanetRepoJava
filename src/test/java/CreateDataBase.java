import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.junit.Test;

import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.exception.LiquibaseException;
import liquibase.resource.FileSystemResourceAccessor;

public class CreateDataBase {
	@Test
	public void test() throws SQLException, LiquibaseException, IOException {
		Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/planetrepo?characterEncoding=UTF-8&serverTimezone=UTC&nullNamePatternMatchesAll=true", "anh", "anh_23");
        Liquibase liquibase = null;
        
        Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(cn));
        
        liquibase = new Liquibase("src/test/resources/DB/main.xml", 
        		new FileSystemResourceAccessor(), database);

//        try {        
        	liquibase.update("MyContext");
//          } finally {
//            if (cn != null) {
//                try {
//                	cn.rollback();
//                	cn.close();
//                } catch (SQLException e) {
//                    //nothing to do
//                }
//            }
//        }
	}
}
