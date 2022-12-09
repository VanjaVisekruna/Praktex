package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "Category")
@Getter
@Setter
@ToString
public class Category {
    @Id
    public UUID id;
    public String name;

    @OneToMany(
            mappedBy = "Category",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    public List<Internship> internships = new ArrayList<>();

    @ManyToMany(mappedBy = "Category")
    List<SearchAgent> searchAgents;
}
