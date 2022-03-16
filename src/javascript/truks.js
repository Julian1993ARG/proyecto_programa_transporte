class truks {
    constructor ({
        id,
        model,
        brand,
        year,
        patent,
    })
    {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.patent = patent;
        
    }                    
}

const truk1 = new truks({
    id:001,
    model:"19320",
    brand:"Volswagen",
    year:2007,
    patent:"GOU889"
})

console.log(truk1)