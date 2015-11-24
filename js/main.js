function afficher_cacher(id)
{
  if(document.getElementById(id).style.display=="none")
  {
      document.getElementById("main").style.height = "auto";
      document.getElementById(id).style.display="block";
      document.getElementById('bouton_'+id).innerHTML='Cacher le texte';
  }
  else
  {   document.getElementById("main").style.height = "500px";
      document.getElementById(id).style.display="none";
      document.getElementById('bouton_'+id).innerHTML='Afficher le texte';
  }
  return true;
}
