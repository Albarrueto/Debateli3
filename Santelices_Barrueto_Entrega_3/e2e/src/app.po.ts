import { browser, by, element } from 'protractor';


export class AppPage {
  
  //devuelve la url donde se hara el testeo
  navigateTo() {
    
    return browser.get('/');
  }

  

  getPrueba1text(){
    
    return element(by.deepCss('app-root ion-content .prueba1 h1')).getText() ;
  }

  getPrueba2text(){
    
    return element(by.deepCss('app-root ion-content .prueba2 h1')).getText() as Promise<string> ;
  }

  /*
  
  async existePrueba1(): Promise<boolean>{
    return element(by.binding('.prueba1')).isPresent();
  }

  */  

  

  
}

