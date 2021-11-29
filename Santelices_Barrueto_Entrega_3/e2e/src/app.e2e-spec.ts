import { AppPage } from './app.po';


describe('Pruebas automatizadas', () => {
  
  
  let page: AppPage;

  //define un objeto tipo page que se importa desde el app.po
  beforeEach(() => {
    page = new AppPage();
  });

  


  it('Comparar contenido prueba1', () => {  
    expect(page.getPrueba1text()).toContain('hola prueba 1');
  });

  it('Comparar contenido prueba2', () => {  
    expect(page.getPrueba2text()).toContain('hola prueba 2');
  });



 /*
  it('existe clase .prueba1', () => {
    page.navigateTo();
    expect(page.existePrueba1()).toBeTruthy();
});
 */


  
});
