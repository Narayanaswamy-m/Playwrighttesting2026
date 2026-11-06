

//Abstract class:
//0 to 100% abstraction.
//can not create the object of abstract class.

abstract class Page {

    abstract title(): void;
    abstract url(): void;

    loading(): void {
        console.log('page -- loading 20 secs');
    }

    header(): void {
        console.log('page -- headers');
    }

}


class HomePage extends Page {
    title(): void {
    }

    url(): void {
    }

    display(): void {
        console.log('HP -- display');
    }

}


class LoginPage extends Page {
    title(): void {
        console.log('LP -- title');
    }
    url(): void {
        console.log('LP -- url');
    }

    override loading(): void {
        console.log('login page -- loading 5 secs');
    }

    doLogin() {
        console.log('login to app');
    }

}
// let pg:Page = new Page(); cannot create an instance for abstract class
// let lp: LoginPage = new LoginPage();
// lp.title();
// lp.url();
// lp.loading();
// lp.doLogin();

//top casting:
let pg: Page = new LoginPage();
pg.title();
pg.url();
pg.loading();
pg.header();


//class --> interface --> interface
//class -- class -- class -- interface