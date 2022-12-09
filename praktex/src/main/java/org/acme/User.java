package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "User")
@Getter
@Setter
public class User {
    @Id
    private UUID id;

    public String name;
    public String email;
    private String password;

    @ManyToOne(fetch =  FetchType.LAZY)
    public Address address;

    @OneToMany(
            mappedBy = "User",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();
}
