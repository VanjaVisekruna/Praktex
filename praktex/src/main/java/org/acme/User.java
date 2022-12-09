package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.awt.image.BufferedImage;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "User")
@Getter
@Setter
@ToString
public class User extends PanacheEntity {
    public String name;
    public String email;
    public String password;
    //public Blob image;

    @ManyToOne(fetch =  FetchType.LAZY)
    public Address address;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();
}
