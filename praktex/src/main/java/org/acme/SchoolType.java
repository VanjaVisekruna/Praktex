package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "SchoolType")
@Getter
@Setter
public class SchoolType {
    @Id
    public UUID id;
    public String type;

    @OneToMany(
            mappedBy = "SchoolType",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();

}
