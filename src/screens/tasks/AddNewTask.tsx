import React, {useState} from 'react';
import {
  ContainerComponent,
  InputComponent,
  SectionComponent,
} from '../../components';
import {TaskModel} from '../../models/TaskModel';
import {Button} from 'react-native';

const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: '',
  start: '',
  end: '',
  uids: [],
  fileUrls: [],
};

function AddNewTask({navigation}: any) {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);

  const handleChangeValue = (key: string, value: string) => {
    const item: any = {...taskDetail};
    item[key] = value;
    setTaskDetail(item);
  };

  const handleAddNewTask = () => {
    console.log(taskDetail);
  };

  return (
    <ContainerComponent back title="And new task">
      <SectionComponent>
        <InputComponent
          title="Title"
          placeholder="Title of task"
          value={taskDetail.title}
          allowClear
          onChange={val => handleChangeValue('title', val)}
        />
        <InputComponent
          title="Description"
          placeholder="Content"
          value={taskDetail.description}
          allowClear
          onChange={val => handleChangeValue('description', val)}
          multiple
          numberOfLine={3}
        />
      </SectionComponent>
      <SectionComponent>
        <Button title="SAVE" onPress={handleAddNewTask} />
      </SectionComponent>
    </ContainerComponent>
  );
}

export default AddNewTask;
