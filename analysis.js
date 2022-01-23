const salariesCompany = company.map(
    function(person){
        return person.salary
    }
)

const salariesCompanySorted = salariesCompany.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
)