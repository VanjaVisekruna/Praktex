package org.acme;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.ws.rs.GET;

//@Entity
@Getter
@Setter
public class User {
    //@Id
    //@Column(name = "id", nullable = false)
    int id;

    int Id;
    String name;

}
