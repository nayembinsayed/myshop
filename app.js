
function addlocalstorege(product_id,product_name,product_desciption,photo_url,product_quantity,product_price){
     
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_desciption = product_desciption;
    this.photo_url = photo_url;
    this.product_quantity = product_quantity;
    this.product_price = product_price;
}


var counter = localStorage.getItem('counter');
if(counter==undefined){
localStorage.setItem('counter',0);
}


function Add_Products(){
    
    counter++;
    var product_name = document.getElementById('pname').value;
    var product_desciption = document.getElementById('pdescription').value;
    var photo_url = document.getElementById('purl').value;
    var product_quantity = document.getElementById('pquantity').value;
     var product_price = document.getElementById('pprice').value;
    
   var product_obj = new addlocalstorege(counter,product_name,product_desciption,photo_url,product_quantity,product_price);
   let obj = JSON.stringify(product_obj);
      
   localStorage.setItem('product_id-'+counter,obj);
   localStorage.setItem('counter',counter);
}


function view_products(){

    
   counter = localStorage.getItem('counter');
    
    for(var i=0; i<counter;i++){
        
        
    
        var div1 = document.createElement("div"); 
                 div1.setAttribute( "class","col-md-3 m-4");
             
             div1.setAttribute( "id","div1"+i);
    
           var div2 = document.createElement("div"); 
                 div2.setAttribute("class","card");
                    div2.setAttribute("id","div2"+i);
        
      document.getElementById("div1"+i).appendChild(div2);

       var img = document.createElement("img"); 
                img.setAttribute("class","card-img-top");
                img.setAttribute("id","pImg");
                img.setAttribute("src","");
                //document.getElementById("pImg").src = "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg";
        
     document.getElementById("div2"+i).appendChild(img);
        
            var div3 = document.createElement("div"); 
                 div3.setAttribute("class","card-body");
        
    document.getElementById("div2"+i).appendChild(div3);
    var h5 = document.createElement("h5");
            h5.setAttribute("class","card-title text-center");
            h5.setAttribute("id","productId"+i);
   
        var p =  document.createElement("p"); 
        p.setAttribute("class","text-center");
        p.setAttribute("id","priceid"+i);
    
        var a =  document.createElement("a");
            a.setAttribute("class","btn btn-outline-secondary btn-lg btn-block");
            a.setAttribute('id','add_cart_id'+i);
            a.setAttribute('href','#');

 
        
        
 }
}




