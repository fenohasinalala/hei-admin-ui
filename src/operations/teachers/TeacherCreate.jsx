import {DateInput, maxLength, SimpleForm, TextInput} from "react-admin";
import {toISO} from "../../utils/date";
import {Create, CreateGeoLocalisation} from "../common/components";
import {SexRadioButton} from "../utils";

const transformTeacher = (record) => {
  const {entrance_datetime, longitude, latitude, ...teacher} = record;
  const coordinates = {longitude: +longitude, latitude: +latitude};

  const teachers = {
    ...teacher,
    entrance_datetime: toISO(entrance_datetime),
    coordinates,
  };
  return teachers;
};

const TeacherCreate = () => (
  <Create title="Enseignants" transform={transformTeacher}>
    <SimpleForm>
      <TextInput source="ref" label="Référence" fullWidth required />
      <TextInput source="first_name" label="Prénoms" fullWidth required />
      <TextInput source="last_name" label="Nom" fullWidth required />
      <SexRadioButton />
      <TextInput source="phone" label="Téléphone" fullWidth />
      <TextInput
        source="nic"
        label="Numéro CIN"
        fullWidth
        validate={maxLength(
          12,
          "Le numéro CIN ne doit pas dépasser 12 caractères."
        )}
      />
      <CreateGeoLocalisation />
      <TextInput source="birth_place" label="Lieu de naissance" fullWidth />
      <DateInput source="birth_date" label="Date de naissance" fullWidth />
      <TextInput multiline source="address" label="Adresse" fullWidth />
      <TextInput source="email" label="Email" fullWidth required />
      <DateInput
        source="entrance_datetime"
        label="Date d'entrée chez HEI"
        fullWidth
        required
      />
    </SimpleForm>
  </Create>
);
export default TeacherCreate;
