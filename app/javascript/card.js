const pay = () => {
  Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY);
  const submit = document.getElementById("button");
  submit.addEventListener("click", (e) => {
    e.preventDefault();


    //カード情報の取得先
    const formResult = document.getElementById("charge-form");
    const formData = new FormData(formResult);

    const card = { //カードオブジェクトを生成 
      number: formData.get("number"),
      cvc: formData.get("cvc"),
      exp_month: formData.get("exp_month"),
      exp_year: `20${formData.get("exp_year")}`
    };
  });
};
