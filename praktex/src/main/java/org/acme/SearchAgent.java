package org.acme;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "SearchAgent")
@Getter
@Setter
public class SearchAgent {
    @Id
    public UUID id;
    public String email;

    @ManyToMany
    @JoinTable(name = "category_searchagent",
            joinColumns = @JoinColumn(name = "searchagent_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    public List<Category> categoryList = new ArrayList<>();

}
