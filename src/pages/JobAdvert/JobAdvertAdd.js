import React, { useEffect, useState } from 'react'
import { Formik, Form } from "formik";
import JobAdvertService from '../../services/jobAdvertService';
import JobTitleService from '../../services/jobTitleservice';
import CityService from '../../services/cityService';
import { toast } from "react-toastify"
import * as yup from "yup";
import WorkPlaceService from '../../services/workPlaceService';
import WorkTimeService from '../../services/workTimeService';
import HKTextInput from '../../utilities/customFormControls/HKTextInput';
import { Button, Header, Label, Icon } from 'semantic-ui-react';
import HKSelectBoxInput from '../../utilities/customFormControls/HKSelectBoxInput';
import HKTextAreaInput from '../../utilities/customFormControls/HKTextAreaInput';
import HKNumberInput from '../../utilities/customFormControls/HKNumberInput';
import HKDateTimeInput from '../../utilities/customFormControls/HKDateTimeInput';



export default function JobAdvertAdd() {

  const [jobTitles, setjobTitles] = useState([])
  const [cities, setcities] = useState([])
  const [workTimes, setworkTimes] = useState([])
  const [workPlaces, setworkPlaces] = useState([])

  useEffect(() => {
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();
    let workPlaceService = new WorkPlaceService();
    let workTimeService = new WorkTimeService();

    cityService.getAllCities().then((result) => { setcities(result.data.data); });

    jobTitleService.getAllJobTitles().then((result) => { setjobTitles(result.data.data); });

    workPlaceService.getWorkPlaces().then((result) => { setworkPlaces(result.data.data); });

    workTimeService.getWorktimes().then((result) => { setworkTimes(result.data.data); });
  }, [])

  function addJobAdvert(params) {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.addJobAdverts(params).then((res) => {
      toast.success(res.data.message);
    })
      .catch((err) => console.log(err));
  }

  const
    initialValues = {
      employer: { id: 3 },
      jobDescription: " ",
      jobTitle: { id: " " },
      workTime: { id: "" },
      workPlace: { id: " " },
      openPositionCount: "",
      city: { id: " " },
      salaryMin: "",
      salaryMax: "",
      applicationDeadline: "",
      applicationDate: " ",
      isActive: true
    };




  const schema = yup.object({
    jobDescription: yup.string().required("Please select the job title"), 
    jobTitle: yup.object().required("This field is required"),

    workPlace: yup.object().required("Please select the work place."),
    workTime: yup.object().required("Please select the work time."),
    salaryMin: yup.number().typeError("This field required number type"),
    salaryMax: yup.number().typeError("This field required number type"),
    openPositionCount: yup.number().typeError("This field required number type.")
      .required("Please enter the open position count"),
    city: yup.object().required("Please select the city."), 
    applicationDate: yup.date().typeError("This field required date type.")
      .required("Please enter the release date"),
    applicationDeadline: yup.date().typeError("This field required date type.")
      .required("Please enter the deadline")
  });





  return (
    <div>
      <br />
      <Header as="h2" style={{ marginLeft: 380 }} >
        <Icon name="edit outline" />
        <Header.Content >Add Job Advert</Header.Content>
      </Header>
      <br /> <br />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
         addJobAdvert(values);

        }}
      >


        <Form className="ui form">


          <HKSelectBoxInput
            name="jobTitle.id"
            options={jobTitles}
            label="Job Title"
          />

          <HKSelectBoxInput
            name="city.id"
            options={cities}
            label="City" />

          <HKSelectBoxInput
            name="workTime.id"
            options={workTimes}
            label=" Work Time"
          />

          <HKSelectBoxInput
            name="workPlace.id"
            options={workPlaces}
            label="Work Place"
          />

          <HKNumberInput
            name="salaryMin"
            placeHolder="Min Salary..."
            label="Min Salary"
          />

          <HKNumberInput
            name="salaryMax"
            placeHolder="Max Salary..."
            label="Max Salary"
          />

          <HKNumberInput
            name="openPositionCount"
            placeholder="Open position Count..."
            label="Open Position Count"
          />


          <HKDateTimeInput
            name="applicationDate"
            placeHolder="Rlease Date..."
            label="Release Date"
          />

          <HKDateTimeInput
            name="applicationDeadline"
            placeholder="Deadline..."
            label="Deadline"
          />

          <HKTextAreaInput
            name="jobDescription"
            placeholder="Job Description..."
            label="Job Description"
          />


          <Button
            content="Add"
            labelPosition="right"
            icon="add"
            positive
            type="submit"
            style={{ backgroundColor: "green" }} />


          <Button
            content="Clean"
            type="reset"    
            labelPosition="right"
            icon="delete"
            onClick={Formik.handleReset}
            style={{ marginLeft: "600px", backgroundColor: "grey" }}
             />

        </Form>

      </Formik>

    </div>
  )
}
