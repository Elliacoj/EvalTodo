class UnitTest {
    /**
     * Constructor
     */
    constructor() {
        this.age = 42;
        this.firstname = "Jack";
        this.lastname = "Haddy";
    }

    /**
     * Return firstname and lastname
     * @returns {string}
     */
    name() {
        return this.firstname + " " + this.lastname;
    }

    /**
     * Return age
     * @returns {number}
     */
    yearOld() {
        return this.age;
    }
}

export {UnitTest};