import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Button, Modal, Label, Grid, Card ,Form,Dropdown, Input, TextArea} from 'semantic-ui-react'
import JobAdvertService from '../../services/jobAdvertService';
import JobTitleService from '../../services/jobTitleservice';
import CityService from '../../services/cityService';

import * as yup from "yup";
import WorkPlaceService from '../../services/workPlaceService';
import WorkTimeService from '../../services/workTimeService';


export default function JobAdvertAdd() {

    let jobAdvertService=new JobAdvertService();

   

    const JobAdvertAddSchema = yup.object().shape({
        jobDescription: yup.string().required("This field is required") ,
        jobTitleId:yup.string().required("This field is required"),
        cityId:  yup.string().required("This field is required"),
        workPlaceId:yup.string().required("This field is required"),
        workTimeId:yup.string().required("This field is required"),
        salaryMin: yup.number().required("This field is required"),
        salaryMax: yup.number().required("This field is required"),
        openPositionCount: yup.string().required("This field is required").min(1),
        applicationDeadline: yup.date().nullable().required("This field is required")
      });
      
      const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositionCount: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
    },
    validationSchema: JobAdvertAddSchema,

    onSubmit: (jobAdvert) => {
      jobAdvert.employerId =4;

      jobAdvertService.addJobAdvert(jobAdvert).then((result)=> {
        alert("added");
        history.push("/jobAdverts"); 
      }).catch((err) => console.log(jobAdvert));
    
    }, });


    const [jobTitles, setjobTitles] = useState([])
    const [cities, setcities] = useState([])
    const [workTimes, setworkTimes] = useState([])
    const [workPlaces, setworkPlaces] = useState([])

    useEffect(() => {
       let cityService=new CityService()
       cityService.getAllCities().then((result)=> setcities(result.data.data))}, []);


    useEffect(() => {
        let jobTitleService=new JobTitleService()
        jobTitleService.getAllJobTitles().then((result)=>setjobTitles(result.data.data))}, [])

    useEffect(() => {
        let workPlaceService=new WorkPlaceService();
        workPlaceService.getWorkPlaces().then((result) => setworkPlaces(result.data.data))
    }, [])   

    useEffect(() => {
      let workTimeService=new WorkTimeService();
      workTimeService.getWorktimes().then((result) => setworkTimes(result.data.data))
  }, [])  




    const cityOption = cities.map((city , index) => ({
        key: index,
        text: city.cityName,
        value: city.id
      }));
    
      const jobTitleOption = jobTitles.map((jobTitle , index) => ({
        key: index,
        text: jobTitle.title,
        value: jobTitle.id
      }));


      const workTimeOption= workTimes.map((workTime ,index) => ({
        key: index,
        text: workTime.name,
        value: workTime.id
      }));
  

    const workPlaceOption= workPlaces.map((workPlace , index) => ({
      key: index,
      text: workPlace.name,
      value: workPlace.id
    }));


 
    return (
        <div>
         <Card fluid>
           <Card.Content header="Add Job Advert"/>
           <Card.Content>

             <Form onSubmit={formik.handleSubmit}>
               <Form.Field style={{marginBottom:"1rem"}}>

                 <Dropdown 
                 id="jobTitleId"
                 clearable
                 placeholder=" Job Title"
                 search 
                 selection
                 onChange={(fieldName ,data) =>
                formik.setFieldValue("jobTitleId" ,data.value)}
                onBlur={formik.onBlur}
                value={formik.values.jobTitleId}
                options={jobTitleOption}
                />
                {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobTitleId}
                    </div>
                )}
               </Form.Field>


               <Form.Field>

                 <Dropdown
                 id="cityId"
                 clearable
                 placeholder="City"
                 search
                 selection
                 onChange={(fieldName,data) =>
                formik.setFieldValue("cityId", data.value)}

                onBlur={formik.onBlur}
                value={formik.values.cityId}
                options={cityOption} />
                
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"} >
                    {formik.errors.cityId}
                  </div>
                )}
               </Form.Field>


               <Form.Field>

                 <Dropdown
                 id="workTimeId"
                 clearable
                 placeholder="Work Time"
                 search
                 selection
                 onChange={(fieldName ,data) =>
                formik.setFieldValue("workTimeId" , data.value)}

                onBlur={formik.onBlur}
                value={formik.values.workTimeId}
                options={workTimeOption} />

                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"} >
                    {formik.errors.workTimeId}
                  </div>
                )}
               </Form.Field>

<Form.Field>
               <Dropdown 
                 id="workPlaceId"
                 clearable
                 placeholder=" Work Place"
                 search 
                 selection
                 onChange={(fieldName ,data) =>
                formik.setFieldValue("workPlaceId" ,data.value)}
                
                onBlur={formik.onBlur}
                value={formik.values.workPlaceId}
                options={workPlaceOption}/>


                {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workPlaceId}
                    </div>
                )}
               </Form.Field>


             <Form.Field>
            
              <Grid  >
              <Grid.Column width={8}>
                <Input
               
               style={{ width: "100%" }}
                type="number"
                name="salaryMin"
                placeholder="Minimun Salary Range"
                onChange={formik.handleChange}
                value={formik.values.salaryMin}
                onBlur={formik.handleBlur} >

              </Input>
              {formik.errors.salaryMin && formik.touched.salaryMin && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.salaryMin}
                </div> 
                 )}
 </Grid.Column>

 <Grid.Column width={8}>
                <Input
                style={{ width: "100%" }}
                name="salaryMax"
                type="number"
                placeholder="Maximum Salary Range"
                onChange={formik.handleChange}
                value={formik.values.salaryMax}
                onBlur={formik.handleBlur} >
             
              </Input>
              {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.salaryMax}
                </div> 
                 )}
                
                </Grid.Column>
                </Grid>
                </Form.Field>

                <Form.Field>
                  <Grid stackable>
                    <Grid.Column width={8}>
              <Input
                style={{ width: "100%" }}
                name="openPositionCount"
                type="number"
                placeholder="Number of open positions"
                onChange={formik.handleChange}
                value={formik.values.openPositionCount}
                onBlur={formik.handleBlur}
              >
              </Input>
              {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.openPositionCount}
                </div>
                )}
                </Grid.Column>

                    <Grid.Column width={8}>
                <Input
                  style={{ width: "100%" }}
                  name="applicationDeadline"
                  type="date"
                  placeholder="Application Deadline"
                  onChange={formik.handleChange}
                  value={formik.values.applicationDeadline}
                  onBlur={formik.handleBlur}  />

                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                  )}

                </Grid.Column>

                  </Grid>
                </Form.Field>
              

                <Form.Field>
                <TextArea
                  style={{ minHeight: 100 }}
                  name="jobDescription"
                  placeholder="Job Description"
                  onChange={formik.handleChange}
                  value={formik.values.jobDescription}
                  onBlur={formik.handleBlur} />

                {formik.errors.jobDescription && formik.touched.jobDescription && (
                  <div className={"ui pointing red basic label"}>
                  {formik.errors.jobDescription}
                </div> 
                 )}
               
              </Form.Field>


              <Button
                content="Add"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ backgroundColor:"green"}}/>


              <Button
							content="Clean"
							type="reset"
              labelPosition="right"
              icon="delete"
							onClick={formik.handleReset}
              style={{ marginLeft: "600px" , backgroundColor: "grey"}}
							disabled={!formik.dirty || formik.isSubmitting} />
            
            
             </Form>
           </Card.Content>
         </Card>
        </div>
    )
}
