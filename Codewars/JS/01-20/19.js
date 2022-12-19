// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. 
// When two quarks interact they exchange colors.


class Quark{
  constructor(color, flavor){
    this.color = color
    this.flavor = flavor
    this.baryon_number = 1/3
  }
  interact(quark){
    const quarkColor = quark.color
    quark.setColor(this.color)
    this.color = quarkColor
  }
  setColor(color){
    this.color = color
  }
}
