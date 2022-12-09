package org.acme;

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
public class InternshipType {
    @Id
    public UUID id;
    public String description;

    @OneToMany(
            mappedBy = "InternshipType",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();
}
