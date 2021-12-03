/**
 * Menghilangkan nilai dari Array.
 * @arrayBuah @Array campuran buah dan hewan
 * @arrayHewan @Array dari hewan
 *
 * @return sebuah @Array
 */
function hapusArray(arrayBuah, arrayHewan) {
  let arrayBuahBaru = []; //membuat Array baru  (sebelumnya variable bersifat const jadi tidak dapat diassign value baru lalu saya menggantinya dengan let)

  //tempat coding disini
  arrayBuahBaru = arrayBuah.filter(same => !arrayHewan.includes(same))
  
  return arrayBuahBaru;
}
