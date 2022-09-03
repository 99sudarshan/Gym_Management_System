export const getValues = (value, formValues, setFormValues, name) => {
  if (name === "package_period") {
    if (formValues.package_type === "Basic(Gym & Cardio)") {
      if (value === "Per Day" || value === "1 Month") {
        setFormValues({
          ...formValues,
          package_fee: `${value === "1 Month" ? 1500 : 200}`,
          [name]: value,
        });
      } else if (value === "Per Week" || value === "3 Months") {
        setFormValues({
          ...formValues,
          package_fee: `${value === "3 Months" ? 4000 : 750}`,
          [name]: value,
        });
      } else if (value === "Per Month" || value === "6 Months") {
        setFormValues({
          ...formValues,
          package_fee: ` ${value === "6 Months" ? 7500 : 2000}`,
          [name]: value,
        });
      } else if (formValues.package_period === "1 Year" || value === "1 Year") {
        console.log("1 year basic test1");
        setFormValues({
          ...formValues,
          package_fee: 13500,
          [name]: value,
        });
      }
    } else if (
      formValues.package_type === "Zumba" ||
      formValues.package_type === "Zumba(with Gym & Cardio)"
    ) {
      if (value === "Per Day" || value === "1 Month") {
        setFormValues({
          ...formValues,
          package_fee: `${value === "1 Month" ? 2000 : 250}`,
          [name]: value,
        });
      } else if (value === "Per Week" || value === "3 Months") {
        setFormValues({
          ...formValues,
          package_fee: `${value === "3 Months" ? 5500 : 1000}`,
          [name]: value,
        });
      } else if (value === "Per Month" || value === "6 Months") {
        setFormValues({
          ...formValues,
          package_fee: `${value === "6 Months" ? 10000 : 2500}`,
          [name]: value,
        });
      } else if (formValues.package_period === "1 Year" || value === "1 Year") {
        console.log("1 year zumba test2");
        setFormValues({
          ...formValues,
          package_fee: 18000,
          [name]: value,
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  } else if (name === "package_type") {
    if (
      formValues.package_period === "Per Day" ||
      formValues.package_period === "1 Month"
    ) {
      if (value === "Basic(Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${formValues.package_period === "1 Month" ? 1500 : 200}`,
          [name]: value,
        });
      } else if (value === "Zumba" || value === "Zumba(with Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${formValues.package_period === "1 Month" ? 2000 : 250}`,
          [name]: value,
        });
      }
    } else if (
      formValues.package_period === "Per Week" ||
      formValues.package_period === "3 Months"
    ) {
      if (value === "Basic(Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${formValues.package_period === "3 Months" ? 4000 : 750}`,
          [name]: value,
        });
      } else if (value === "Zumba" || value === "Zumba(with Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${
            formValues.package_period === "3 Months" ? 5500 : 1000
          }`,
          [name]: value,
        });
      }
    } else if (
      formValues.package_period === "Per Month" ||
      formValues.package_period === "6 Months"
    ) {
      if (value === "Basic(Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${
            formValues.package_period === "6 Months" ? 7500 : 2000
          }`,
          [name]: value,
        });
      } else if (value === "Zumba" || value === "Zumba(with Gym & Cardio)") {
        setFormValues({
          ...formValues,
          package_fee: `${
            formValues.package_period === "6 Months" ? 10000 : 2500
          }`,
          [name]: value,
        });
      }
    } else if (formValues.package_period === "1 Year" || value === "1Year") {
      if (value === "Basic(Gym & Cardio)") {
        console.log("1 year basic test3");
        setFormValues({
          ...formValues,
          package_fee: 13500,
          [name]: value,
        });
      } else if (value === "Zumba(with Gym & Cardio)") {
        console.log("1 year zumba test4 ");
        setFormValues({
          ...formValues,
          package_fee: 18000,
          [name]: value,
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  }
};
