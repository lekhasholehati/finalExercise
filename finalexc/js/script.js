// form create dan hasil

$('#created').on('click', function() {
		var nama 	 = $('#nama').val();
			gender 	 = $('#gender').val();
			telp 	 = $('#telp').val();
			email 	 = $('#email').val();
			password = $('#password').val();

		if (nama !== "" && gender !== "" && telp !== "" && email !== "" && password !== "" ) {
			$('#panel').show();
			$('#acc').hide();
			$('#back').show();
			$('#hasilnama').html(nama);
			$('#hasilgender').html(gender);
			$('#hasiltelp').html(telp);
			$('#hasilemail').html(email);
			$('#hasilpassword').html(password);
		} else {
			alert("Semua Field Harus Diisi")
		}
	});

	$('#back').click(function(){
		window.location = "index.html";
		return false;
	});

//sign-in
$('#sign-in').on('click', function(){
	var email 		= "user@gmail.com";
		password 	= "user";
	var value_email = $('#sign_email').val();
		value_password = $('#sign_password').val();

		if (email == value_email && password == value_password) {
			// alert("Berhasil Login");
			window.location = "myaccount.html";
			return false;
		} else {
			alert("Gagal Login");
		}

});

// create akun baru

$('#create').click(function(){
	window.location = "formcreate.html";
	return false;
});
// button registrasi
$('#registrasi').click(function(){
	$('#forms').show();

});
// my account to hasildata
		$('#kirim').on('click', function(){

			var nama 	= $('#nama').val();
			panggilan 	= $('#name').val();
			ktp 	 	= $('#ktp').val();
			kk 	 		= $('#kk').val();
			tempat 		= $('#tempat').val();
			ttl 	 	= $('#ttl').val();
			gender 	 	= $('#gender').val();
			agama 	 	= $('#agama').val();
			wn 	 		= $('#wn').val();
			telp 	 	= $('#telp').val();
			email 	 	= $('#email').val();
			alamat 	 	= $('#kk').val();
			pendidikan 	= $('#pend').val();
			lulus 	 	= $('#lulus').val();
			sd 	 		= $('#sd').val();
			smp 	 	= $('#smp').val();
			slta 	 	= $('#slta').val();
			d3 	 		= $('#d3').val();
			s1 	 		= $('#s1').val();
			s2 	 		= $('#s2').val();
			s3 	 		= $('#s3').val();
			karya 	 	= $('#karya').val();
			prestasi 	= $('#prestasi').val();
			np 	 		= $('#np1').val();
			ak 	 		= $('#ak1').val();
			periode 	= $('#lb1').val();
			status 	 	= $('#status').val();
			ayah 	 	= $('#ayah').val();
			ibu 	 	= $('#ibu').val();
			saudara 	= $('#saudara').val();


			$('#hasil').show();
			$('#forms').hide();
			$('#info').show();
			$('#hnama').html(nama);
			$('#hpanggilan').html(panggilan);
			$('#hktp').html(ktp);
			$('#hkk').html(kk);
			$('#htempat').html(tempat);
			$('#httl').html(ttl);
			$('#hgender').html(gender);
			$('#hagama').html(agama);
			$('#hwn').html(wn);
			$('#htelp').html(telp);
			$('#hemail').html(email);
			$('#halamat').html(alamat);
			$('#hpend').html(pendidikan);
			$('#hlulus').html(lulus);
			$('#hsd').html(sd);
			$('#hsmp').html(smp);
			$('#hslta').html(slta);
			$('#hd3').html(d3);
			$('#hs1').html(s1);
			$('#hs2').html(s2);
			$('#hs3').html(s3);
			$('#hkarya').html(karya);
			$('#prestasi').html(prestasi);
			$('#hnp').html(np);
			$('#hak').html(ak);
			$('#hlb').html(periode);
			$('#hstatus').html(status);
			$('#hayah').html(ayah);
			$('#hibu').html(ibu);
			$('#hsaudara').html(saudara);

		});

		// sign out
		$('#kembali').click(function(){
			window.location = "index.html";
			return false;
		})




// Scroll untuk navbar

// event pada saat diklik

$('.page-scroll').on('click', function(e){
	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element ybs
	var elemenTujuan =$(tujuan);
	// pindah scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top-50
	},1000, 'swing');

	e.preventDefault();

});
