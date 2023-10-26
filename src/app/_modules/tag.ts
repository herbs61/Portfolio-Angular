export class Tag{
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly CSHARP = new Tag('C#', 'green');
  static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
  static readonly ASPNET = new Tag('ASP.NET', 'purple');



  private constructor(private readonly key:string, public readonly color:string){

  }
  toString(){
    return this.key;
  }
}
