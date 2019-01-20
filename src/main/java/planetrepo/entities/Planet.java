package planetrepo.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table( name = "planets" )
public class Planet {
	public Planet()
	{
		Id = 0;
	}
	
	@Id
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	public Integer Id;
	
	public String name;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Date_Created")
	@JsonIgnore()
	public Date lastVisitDate;
	
	@JsonProperty(value="lastVisitDate")
	public ClientDate GetLastVisitDate()
	{
		return new ClientDate(this.lastVisitDate);
	}
	
	public double radius;
}
