/**
 * mencari nilai terbasar
 * @angka1 14
 * @angka2 59
 * @angka3 52
 * @angka4 4
 * @angka5 38
 *
 * @return sebuah @String
 */
function nilaiTerbesar(angka1, angka2, angka3, angka4, angka5) {
  let besar = 0;
  //tempat coding disini
  var array = [angka1, angka2, angka3, angka4, angka5]
  for(let i=0; i<=array[0]; i++){
    if(array[i]> array[0]){
      array[0] = array[i]
      besar = array[0]
    }
  }
  return 'Nilai terbesar adalah: ' + besar;
}
