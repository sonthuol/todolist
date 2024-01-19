import React, {useState} from 'react';
import {
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {TaskModel} from '../../models/TaskModel';
import {User} from 'iconsax-react-native';
import {colors} from '../../constants/colors';

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
      </SectionComponent>
    </ContainerComponent>
  );
}

export default AddNewTask;
