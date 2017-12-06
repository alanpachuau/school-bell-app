<template>
    <div>
        <el-upload
                class="upload-demo"
                drag
                action="http://localhost:8000/sounds/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>


        <el-row :gutter="20" v-if="sounds.length">
            <el-col :span="20">
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="Consistency" name="1">
                        <div>B with real life: in line with the process and logic of real life, and comply with
                            languages and habits that the users are used to;
                        </div>
                        <div>Consistent within interface: all elements should be consistent, such as: design style,
                            icons and texts, position of elements, etc.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Feedback" name="2">
                        <div>Operation feedback: enable the users to clearly perceive their operations by style updates
                            and interactive effects;
                        </div>
                        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Efficiency" name="3">
                        <div>Simplify the process: keep operating process simple and intuitive;</div>
                        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly
                            understand and make decisions;
                        </div>
                        <div>Easy to identify: the interface should be straightforward, which helps the users to
                            identify and frees them from memorizing and recalling.
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="Controllability" name="4">
                        <div>Decision making: giving advices about operations is acceptable, but do not make decisions
                            for the users;
                        </div>
                        <div>Controlled consequences: users should be granted the freedom to operate, including
                            canceling, aborting or terminating current operation.
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
            <el-col :span="4">
                <p style="text-align: center;margin-bottom: 30px;">
                    <el-button @click="createFormVisible = true" size="huge" round><i class="el-icon-plus"></i> Add New
                    </el-button>
                </p>
            </el-col>
        </el-row>

        <div class="no-sound" v-else>
            <h3>Okay! I believe this is the first time you've come here.</h3>
            <p>No bell sounds available at the moment! You can add new sound by clicking the button below.</p>
            <p>
                <el-button @click="createFormVisible = true" size="huge" round><i class="el-icon-plus"></i> Add Sound
                </el-button>
            </p>
        </div>

        <el-dialog title="New Sound" width="40%" :visible.sync="createFormVisible">
            <el-form ref="editForm" :model="createForm" label-width="120px" label-position="left">
                <el-form-item prop="name" label="Name">
                    <el-input v-model="createForm.name" placeholder="Enter name for this sound"
                              auto-complete="off"></el-input>
                </el-form-item>
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">select file</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to
                        server
                    </el-button>
                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                </el-upload>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createFormVisible = false" round>Close</el-button>
                <el-button @click="save" round>Save</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
  export default {
    name: 'bell-sound',
    data() {
      return {
        activeNames: ['1'],
        sounds: [],
        createFormVisible: false,
        createForm: {
          name: '',
          sound: '',
        },
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        }],
      };
    },
    methods: {
      save() {
        return '';
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
    },
  };
</script>

<style type="text/css">
    .no-sound {
        text-align: center;
        font-size: 18px;
        color: #969696;
        padding: 10px 0px 0 30px;
    }

    .no-sound h3 {
        margin-bottom: 10px;
    }

    .no-sound p {
        margin-bottom: 30px;
    }
</style>