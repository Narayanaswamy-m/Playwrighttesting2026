//interface can have only abstract methods
//abstract methods: a method doesnt have any method body/no bussiness logic
//only method declaration/method prototype
//can not create the object of interface
//OOP: abstraction: 100%
// by using interface we can achieve multiple inheritance 

interface IMF {
    rating(): void;
}

interface Bank extends IMF {
    fee?: number;
    credit(): void;
    debit(): void;
    transfer(): void;
    recoveryLoan(): void;
    mf(): void;

}

interface WorldBank {
    loan(): void;
    recoveryLoan(): void;
}

interface FinBank {
    upi(): void;
    recoveryLoan(): void;
}

class BankPolicy {
    homeLoan(): void {
        console.log('bank policy -- home loan');
    }

    eduLoan(): void {
        console.log('bank policy -- edu loan');
    }

    recoveryLoan(): void {
        console.log('bank policy -- recoveryLoan');
    }

}

class HdfcBank extends BankPolicy implements Bank, WorldBank, FinBank {
    rating(): void {
        console.log('hdfc -- rating');
    }

    override homeLoan(): void {
        console.log('hdfc -- home loan policy');
    }

    //Bank 
    mf(): void {
        console.log('HDFC -- MF');
    }

    credit(): void {
        console.log('HDFC -- credit');
    }

    debit(): void {
        console.log('HDFC -- debit');
    }

    transfer(): void {
        console.log('HDFC -- transfer');
    }

    //WorldBank
    loan(): void {
        console.log('HDFC -- loan');
    }

    //FinBank
    upi(): void {
        console.log('HDFC -- upi');
    }

    //Common: 
    recoveryLoan(): void {
        console.log('HDFC -- recovery loan');
    }

    //individual methods:
    fixedDeposit(): void {
        console.log('HDFC -- FD');
    }


}

//create the object of the class : HDFCBank
let hf: HdfcBank = new HdfcBank();
hf.credit();
hf.debit();
hf.transfer();
hf.loan();
hf.upi();
hf.recoveryLoan();
hf.fixedDeposit();
hf.homeLoan();
hf.eduLoan();
// top casting 
let bk: Bank = new HdfcBank();
bk.credit();
bk.debit();
bk.mf();
bk.rating();
bk.recoveryLoan();
bk.transfer();

// relations here c-class, i-interface
// C - C: extends
//C - I: implements
//I - I : extends
//I - C: NA


