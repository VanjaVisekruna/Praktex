package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Address")
@Getter
@Setter
public class Address {
    @Id
    public UUID id;

    private String street;
    private String hNumber;
    private String city;
    public String district;

    @OneToMany(
            mappedBy = "Address",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<User> user = new ArrayList<>();
}
