package com.java.recyclebank.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "recyclingbanks")
public class RecyclingBank implements Comparable<RecyclingBank>{

    @Id
    private int objectid;
    private double x;
    private double y;
    private String site_name_;
    private String ward;
    private String charitybanks;
    private String booksmusic;
    private String cansfoil;
    private String cansplasticbottles;
    private String plasticbottles;
    private String textiles;
    private String weee;
    private String glass;
    private String shoes;
    private String cartons;
    private String books;
    private String cardboard;
    private String paper;
    private String address;
    private String categories;
    @Transient
    private Double distance;
    public RecyclingBank() {
    }

    public RecyclingBank(int objectid, Long x, Long y, String site_name_, String ward, String charitybanks,
            String booksmusic, String cansfoil, String cansplasticbottles, String plasticbottles, String textiles,
            String weee, String glass, String shoes, String cartons, String books, String cardboard, String paper,
            String address, String categories) {
        this.objectid = objectid;
        this.x = x;
        this.y = y;
        this.site_name_ = site_name_;
        this.ward = ward;
        this.charitybanks = charitybanks;
        this.booksmusic = booksmusic;
        this.cansfoil = cansfoil;
        this.cansplasticbottles = cansplasticbottles;
        this.plasticbottles = plasticbottles;
        this.textiles = textiles;
        this.weee = weee;
        this.glass = glass;
        this.shoes = shoes;
        this.cartons = cartons;
        this.books = books;
        this.cardboard = cardboard;
        this.paper = paper;
        this.address = address;
        this.categories = categories;
    }

    public RecyclingBank(Long x, Long y, String site_name_, String ward, String charitybanks, String booksmusic,
            String cansfoil, String cansplasticbottles, String plasticbottles, String textiles, String weee,
            String glass, String shoes, String cartons, String books, String cardboard, String paper, String address,
            String categories) {
        this.x = x;
        this.y = y;
        this.site_name_ = site_name_;
        this.ward = ward;
        this.charitybanks = charitybanks;
        this.booksmusic = booksmusic;
        this.cansfoil = cansfoil;
        this.cansplasticbottles = cansplasticbottles;
        this.plasticbottles = plasticbottles;
        this.textiles = textiles;
        this.weee = weee;
        this.glass = glass;
        this.shoes = shoes;
        this.cartons = cartons;
        this.books = books;
        this.cardboard = cardboard;
        this.paper = paper;
        this.address = address;
        this.categories = categories;
    }

    public int getObjectid() {
        return objectid;
    }

    public void setObjectid(int objectid) {
        this.objectid = objectid;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public String getSite_name_() {
        return site_name_;
    }

    public void setSite_name_(String site_name_) {
        this.site_name_ = site_name_;
    }

    public String getWard() {
        return ward;
    }

    public void setWard(String ward) {
        this.ward = ward;
    }

    public String getCharitybanks() {
        return charitybanks;
    }

    public void setCharitybanks(String charitybanks) {
        this.charitybanks = charitybanks;
    }

    public String getBooksmusic() {
        return booksmusic;
    }

    public void setBooksmusic(String booksmusic) {
        this.booksmusic = booksmusic;
    }

    public String getCansfoil() {
        return cansfoil;
    }

    public void setCansfoil(String cansfoil) {
        this.cansfoil = cansfoil;
    }

    public String getCansplasticbottles() {
        return cansplasticbottles;
    }

    public void setCansplasticbottles(String cansplasticbottles) {
        this.cansplasticbottles = cansplasticbottles;
    }

    public String getPlasticbottles() {
        return plasticbottles;
    }

    public void setPlasticbottles(String plasticbottles) {
        this.plasticbottles = plasticbottles;
    }

    public String getTextiles() {
        return textiles;
    }

    public void setTextiles(String textiles) {
        this.textiles = textiles;
    }

    public String getWeee() {
        return weee;
    }

    public void setWeee(String weee) {
        this.weee = weee;
    }

    public String getGlass() {
        return glass;
    }

    public void setGlass(String glass) {
        this.glass = glass;
    }

    public String getShoes() {
        return shoes;
    }

    public void setShoes(String shoes) {
        this.shoes = shoes;
    }

    public String getCartons() {
        return cartons;
    }

    public void setCartons(String cartons) {
        this.cartons = cartons;
    }

    public String getBooks() {
        return books;
    }

    public void setBooks(String books) {
        this.books = books;
    }

    public String getCardboard() {
        return cardboard;
    }

    public void setCardboard(String cardboard) {
        this.cardboard = cardboard;
    }

    public String getPaper() {
        return paper;
    }

    public void setPaper(String paper) {
        this.paper = paper;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCategories() {
        return categories;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    @Override
    public String toString() {
        return "RecyclingBank [address=" + address + ", books=" + books + ", booksmusic=" + booksmusic + ", cansfoil="
                + cansfoil + ", cansplasticbottles=" + cansplasticbottles + ", cardboard=" + cardboard + ", cartons="
                + cartons + ", categories=" + categories + ", charitybanks=" + charitybanks + ", distance=" + distance
                + ", glass=" + glass + ", objectid=" + objectid + ", paper=" + paper + ", plasticbottles="
                + plasticbottles + ", shoes=" + shoes + ", site_name_=" + site_name_ + ", textiles=" + textiles
                + ", ward=" + ward + ", weee=" + weee + ", x=" + x + ", y=" + y + "]";
    }

    @Override
    public int compareTo(RecyclingBank recyclingBank) 
    {
        return Double.compare(getDistance(), recyclingBank.getDistance());
    }

    

       
}
