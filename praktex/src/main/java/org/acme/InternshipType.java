package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "InternshipType")
@Getter
@Setter
public class InternshipType extends PanacheEntity {
    public String description;

    @OneToMany(
            mappedBy = "internshipType",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();
}
