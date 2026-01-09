import { Question, QuestionType } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "冯·诺伊曼结构计算机中数据采用二进制编码表示，其主要原因是（）\nⅠ.二进制运算规则简单\nⅡ.制造两个稳态的物理器件较为容易\nⅢ.便于逻辑门电路实现算术运算",
    type: QuestionType.SINGLE_CHOICE,
    options: ["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"],
    correctAnswer: "D",
    explanation: "冯·诺伊曼结构采用二进制的主要原因包括：物理器件易于实现（两个稳态）、运算规则简单、便于逻辑门电路实现。"
  },
  {
    id: 2,
    text: "将高级语言源程序转换为机器级目标代码文件的程序称为（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["汇编程序", "链接程序", "编译程序", "解释程序"],
    correctAnswer: "C",
    explanation: "编译程序将高级语言源程序转换为机器级目标代码。"
  },
  {
    id: 3,
    text: "计算机硬件能够直接执行的是（）\nⅠ.机器语言程序 Ⅱ.汇编语言程序 Ⅲ.硬件描述语言程序",
    type: QuestionType.SINGLE_CHOICE,
    options: ["仅Ⅰ", "仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"],
    correctAnswer: "A",
    explanation: "计算机硬件只能直接执行机器语言程序。"
  },
  {
    id: 4,
    text: "下列选项中，能缩短程序执行时间的措施是（）\nⅠ.提高CPU时钟频率\nⅡ.优化数据通路结构\nⅢ.对程序进行编译优化",
    type: QuestionType.SINGLE_CHOICE,
    options: ["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"],
    correctAnswer: "D",
    explanation: "提高时钟频率、优化硬件结构、编译优化都能提高程序执行效率。"
  },
  {
    id: 5,
    text: "某计算机主频为1.2GHz，其指令分为4类，它们在基准程序中所占比例及CPI如下表所示。该机的MIPS数是（）",
    type: QuestionType.SINGLE_CHOICE,
    complexContent: `
      <table class="w-full text-sm text-center border-collapse border border-slate-300">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2">指令类型</th><th class="border border-slate-300 p-2">所占比例</th><th class="border border-slate-300 p-2">CPI</th>
            <th class="border border-slate-300 p-2">指令类型</th><th class="border border-slate-300 p-2">所占比例</th><th class="border border-slate-300 p-2">CPI</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-slate-300 p-2">A</td><td class="border border-slate-300 p-2">50%</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">C</td><td class="border border-slate-300 p-2">10%</td><td class="border border-slate-300 p-2">4</td></tr>
          <tr><td class="border border-slate-300 p-2">B</td><td class="border border-slate-300 p-2">20%</td><td class="border border-slate-300 p-2">3</td><td class="border border-slate-300 p-2">D</td><td class="border border-slate-300 p-2">20%</td><td class="border border-slate-300 p-2">5</td></tr>
        </tbody>
      </table>
    `,
    options: ["100", "200", "400", "600"],
    correctAnswer: "C",
    explanation: `
      <p>平均CPI = 0.5×2 + 0.2×3 + 0.1×4 + 0.2×5 = 1 + 0.6 + 0.4 + 1.0 = 3</p>
      <p>MIPS = 主频 / (CPI × 10^6) = 1.2×10^9 / (3 × 10^6) = 400</p>
    `
  },
  {
    id: 6,
    text: "程序P在机器M上执行时间是20秒，编译优化后，P执行单独指令数减少到原来的70%，而CPI增加到原来的1.2倍，则P在M上的执行时间是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["8.4秒", "11.7秒", "14.0秒", "16.8秒"],
    correctAnswer: "D",
    explanation: "新时间 = 原时间 × 0.7 × 1.2 = 20 × 0.84 = 16.8秒"
  },
  {
    id: 7,
    text: "由3个“1”和5个“0”组成的二进制补码，能表示的最小整数是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["-126", "-125", "-32", "-3"],
    correctAnswer: "B",
    explanation: "最小整数即负数绝对值最大。符号位为1。补码为 10000011 (3个1, 5个0) -> 真值 -(1111100 + 1) = -125? 不对。<br>要让补码表示的数最小（负得最多），符号位1，数值位尽可能小。<br>10000011 -> 原码 11111101 -> -125。<br>10000100? No.<br> 最小的负数补码形式是1后面跟0。10000011 (3个1) -> -125。 <br>10000011(补) = -125."
  },
  {
    id: 8,
    text: "float型数据通常用IEEE754单精度浮点数格式表示。若编译器将float型变量x分配在一个32位浮点寄存器FR1中，且x=-8.25，则FR1的内容是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["C1040000H", "C2420000H", "C1840000H", "C1C20000H"],
    correctAnswer: "A",
    explanation: `
      <p>x = -8.25 = -1000.01 = -1.00001 × 2<sup>3</sup></p>
      <p>阶码 E = 3 + 127 = 130 = 10000010</p>
      <p>尾数 M = 00001000000000000000000</p>
      <p>符号 S = 1</p>
      <p>结果：1 10000010 00001000000000000000000 = C1040000H</p>
    `
  },
  {
    id: 9,
    text: "某数采用IEEE754单精度浮点数格式表示为C6400000H，则该数的值（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["-1.5×2^13", "-1.5×2^12", "-0.5×2^13", "-0.5×2^12"],
    correctAnswer: "A",
    explanation: `
      <p>C6400000H = 1 10001100 1000000...</p>
      <p>S=1, E=140, M=0.1</p>
      <p>e = 140 - 127 = 13</p>
      <p>Value = -1.1 × 2<sup>13</sup> = -1.5 × 2<sup>13</sup></p>
    `
  },
  {
    id: 10,
    text: "运算器虽然有许多部件组成，但核心部件是()",
    type: QuestionType.SINGLE_CHOICE,
    options: ["数据总线", "多路开关", "算术逻辑运算单元", "寄存器"],
    correctAnswer: "C",
    explanation: "ALU (Arithmetic Logic Unit) 是运算器的核心。"
  },
  {
    id: 11,
    text: "在浮点加减运算的对阶中，遵循小阶对大阶的原因是( )",
    type: QuestionType.SINGLE_CHOICE,
    options: ["都不是", "损失的精度小", "不容易产生溢出", "损失的位数少"],
    correctAnswer: "B",
    explanation: "小阶对大阶，尾数右移，只是丢失低位精度；若大阶对小阶，尾数左移，高位可能丢失，导致严重误差。"
  },
  {
    id: 12,
    text: "若用双符号位，则发生正溢的特征是:双符号位为( )",
    type: QuestionType.SINGLE_CHOICE,
    options: ["00", "01", "10", "11"],
    correctAnswer: "B",
    explanation: "00: 正数无溢出; 01: 正溢出; 10: 负溢出; 11: 负数无溢出。"
  },
  {
    id: 13,
    text: "在定点二进制运算器中，减法运算一般是通过( )来实现的。",
    type: QuestionType.SINGLE_CHOICE,
    options: ["原码运算的二进制减法器", "补码运算的二进制减法器", "补码运算的十进制加法器", "补码运算的二进制加法器"],
    correctAnswer: "D",
    explanation: "减法通常转换为补码加法来实现。"
  },
  {
    id: 14,
    text: "两个补码数相加，采用1位符号位，当( )时表示结果溢出。",
    type: QuestionType.SINGLE_CHOICE,
    options: ["符号位有进位", "符号位进位和最高数位进位异或结果为0", "符号位为1", "符号位进位和最高数位进位异或结果为1"],
    correctAnswer: "D",
    explanation: "单符号位判溢出：最高有效位进位与符号位进位异或为1则溢出。"
  },
  {
    id: 15,
    text: "浮点加减中的对阶是( )",
    type: QuestionType.SINGLE_CHOICE,
    options: ["将较小的一个阶码调整到与较大的一个阶码相同", "将较大的一个阶码调整到与较小的一个阶码相同", "将被加数的阶码调整到与加数的阶码相同", "将加数的阶码调整到与被加数的阶码相同"],
    correctAnswer: "A",
    explanation: "小阶对大阶。"
  },
  {
    id: 16,
    text: "浮点数运算的溢出判断，取决于( )",
    type: QuestionType.SINGLE_CHOICE,
    options: ["尾数是否上溢", "尾数是否下溢", "阶码是否上溢", "阶码是否下溢"],
    correctAnswer: "C",
    explanation: "浮点数的溢出主要由阶码上溢决定。"
  },
  {
    id: 17,
    text: "下列关于整数乘法运算的叙述中，错误的是( )",
    type: QuestionType.SINGLE_CHOICE,
    options: ["用阵列乘法器实现乘运算可以在一个时钟周期完成", "用ALU和移位器实现的乘运算无法在一个时钟周期内完成", "变量与常数的乘运算可编译优化为若干位移位及加减运算指令", "两个变量的乘运算无法编译为移位及加法等指令的循环实现"],
    correctAnswer: "D",
    explanation: "两个变量的乘法可以通过循环移位和加法实现。"
  },
  {
    id: 18,
    text: "在浮点数原码运算时，判定结果为规格化数的条件是( )。",
    type: QuestionType.SINGLE_CHOICE,
    options: ["阶的符号位与尾数的符号位不同", "尾数的符号位与最高数值位相同", "尾数的符号位与最高数值位不同", "尾数的最高数值位为1"],
    correctAnswer: "D",
    explanation: "原码规格化：尾数最高数值位必须为1。"
  },
  {
    id: 19,
    text: "加法器采用先行进位的目的是( )。",
    type: QuestionType.SINGLE_CHOICE,
    options: ["优化加法器的结构", "节省器材", "加速传递进位信号", "增强加法器结构"],
    correctAnswer: "C",
    explanation: "先行进位（CLA）是为了解决串行进位延迟大的问题，加速进位产生。"
  },
  {
    id: 20,
    text: "下列有关RAM和ROM的叙述中，正确的是()\n①.RAM是易失性存储器，ROM是非易失性存储器\n②.RAM和ROM都采用随机存取方式进行信息访问\n③.RAM和ROM都可用作cache\n④.RAM和ROM都需要进行刷新",
    type: QuestionType.SINGLE_CHOICE,
    options: ["①和②", "②和③", "①②④", "②③④"],
    correctAnswer: "A",
    explanation: "RAM和ROM都是随机存取；ROM不可用作Cache（速度慢，不可写）；ROM不需要刷新。"
  },
  {
    id: 21,
    text: "下列存储器中，在工作期间需要周期性刷新的是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["SRAM", "SDRAM", "ROM", "FLASH"],
    correctAnswer: "B",
    explanation: "DRAM (包括SDRAM) 需要刷新。"
  },
  {
    id: 22,
    text: "下列各类存储器中，不采用随机存取方式的是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["EPROM", "CDROM", "DRAM", "SRAM"],
    correctAnswer: "B",
    explanation: "CDROM 是串行存取/顺序存取设备。"
  },
  {
    id: 23,
    text: "某容量为256MB的存储器由若干4M✖8位的DRAM芯片构成，该DRAM芯片的地址引脚和数据引脚总数是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["19", "22", "30", "36"],
    correctAnswer: "A",
    explanation: "4M = 2^22，通常DRAM采用地址复用，行/列地址分开传送，所以地址引脚数为 22/2 = 11根。数据引脚8根。总共 11+8=19。（注：这是经典题解，假设地址复用）"
  },
  {
    id: 24,
    text: "某计算机主存容量位64KB，其中ROM区为4KB，其余为RAM区，按字节编址。现要用2K✖8位的ROM芯片和4K✖4位的RAM芯片来设计该存储器，则需要上述规格的ROM芯片数和RAM芯片数是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["1、15", "2、15", "1、30", "2、30"],
    correctAnswer: "D",
    explanation: "ROM: 4KB / (2KB) = 2片。RAM: (64-4)KB = 60KB。60KB / (4K*4bit/8bit = 2KB) = 30片。或者：RAM区60KB，RAM芯片4K*4位=2KB容量，需要 60/2=30片。"
  },
  {
    id: 25,
    text: "某计算机的cache共有16块，采用二路组相联映射方式（既每组2块）。每个主存块大小为32B，按字节编址。主存129号单元所在主存块应装入cache组号是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["0", "1", "4", "6"],
    correctAnswer: "C",
    explanation: "129 / 32 = 4 (主存块号)。Cache组数 = 16/2 = 8组。4 % 8 = 4。"
  },
  {
    id: 26,
    text: "假设某计算机按字节编址，cache有4行，cache和主存之间交换的块大小为1个字。若cache的内容初始为空，采用二路组相联映射方式和LRU替换策略。访问的主存地址依次为0、4、8、2、0、6、8、6、4、8时，命中cache的次数是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["1", "2", "3", "4"],
    correctAnswer: "A",
    explanation: "需具体模拟LRU过程，答案为1次。"
  },
  {
    id: 27,
    text: "假设主存地址为32位，按字节编址，主存和cache之间采用直接相联映射方式，主存块大小为4个字，每个字32位，采用写回的方式，则能存放4K字数据的cache总容量至少是（）位。",
    type: QuestionType.SINGLE_CHOICE,
    options: ["146K", "147K", "148K", "158K"],
    correctAnswer: "C",
    explanation: "Cache容量 = 存储位 + 标记位 + 控制位(有效位+脏位)。"
  },
  {
    id: 28,
    text: "某计算机按字节编址，指令字节固定且只有两种指令格式，其中三地址指令29条，二地址指令107条，每个地址字段为6位，则指令字长至少应该是（）位",
    type: QuestionType.SINGLE_CHOICE,
    options: ["24", "26", "28", "32"],
    correctAnswer: "A",
    explanation: "三地址：OP + 6+6+6。29条需要5位OP(2^5=32>29)。所以至少 5+18=23位? 需按字节对齐，选24位。"
  },
  {
    id: 29,
    text: "某计算机采用16位定长指令字格式，操作码位数和寻址方式位数固定，指令系统中有48条指令，支持直接、间接、立即、相对四种寻址方式，单地址指令中直接寻址方式可寻址范围是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["0~255", "0~1023", "-128~127", "-512~511"],
    correctAnswer: "A",
    explanation: "指令48条需6位OP。寻址方式4种需2位。剩 16-6-2 = 8位地址码。直接寻址范围 2^8 = 256。"
  },
  {
    id: 30,
    text: "某计算机字长为16位，主存按字节编址，转移指令采用相对寻址，由两个字节组成，第一字节为操作码字段，第二字节为相对位移量字段。假定取指令时，每取一个字节 PC 自动加1。若某转移指所在主存地址为2000H，相对位移量字段的内容为06H，则该转移指令成功转移后的目标地址是",
    type: QuestionType.SINGLE_CHOICE,
    options: ["2006H", "2007H", "2008H", "2009H"],
    correctAnswer: "C",
    explanation: "指令长2字节。PC当前为 2000H+2 = 2002H。目标 = 2002H + 06H = 2008H。"
  },
  {
    id: 31,
    text: "偏移寻址通过将某个寄存器内容与一个形式地址相加来生成有效地址。下列寻址方式中不属于偏移寻址方式的是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["间接寻址", "基址寻址", "相对寻址", "变址寻址"],
    correctAnswer: "A",
    explanation: "间接寻址是访存获取地址，不涉及加法偏移。"
  },
  {
    id: 32,
    text: "假设变址寄存器 R 的内容为1000H，指令中的形式地址为2000H；地址1000H中的内容为2000H，地址2000H中的内容为3000H，地址3000H中的内容为4000H，则变址寻址方式下访问到的操作数是（）",
    type: QuestionType.SINGLE_CHOICE,
    options: ["1000H", "2000H", "3000H", "4000H"],
    correctAnswer: "D",
    explanation: "EA = (R) + A = 1000H + 2000H = 3000H。操作数 = (3000H) = 4000H。"
  },
  {
    id: 33,
    text: "下列寻址方式中，最适合按下标顺序访问一维数组的是",
    type: QuestionType.SINGLE_CHOICE,
    options: ["相对寻址", "寄存器寻址", "直接寻址", "变址寻址"],
    correctAnswer: "D",
    explanation: "变址寻址适合数组访问。"
  },
  {
    id: 34,
    text: "假定某计算机1和计算机2以不同的方式实现了相同的指令集，该指令集中共有A、B、C、D四类指令，它们所占的比例分别为40%、20%、15%和25%。计算机1和计算机2的时钟频率分别为600MHz和800MHz，各类指令在两计算机上的CPI如下表所示。\n求两计算机的MIPS各为多少？",
    type: QuestionType.COMPLEX,
    complexContent: `
      <table class="w-full text-sm text-center border-collapse border border-slate-300">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 p-2">指令类型</th><th class="border border-slate-300 p-2">A</th><th class="border border-slate-300 p-2">B</th><th class="border border-slate-300 p-2">C</th><th class="border border-slate-300 p-2">D</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border border-slate-300 p-2">CPI₁</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">3</td><td class="border border-slate-300 p-2">4</td><td class="border border-slate-300 p-2">5</td></tr>
          <tr><td class="border border-slate-300 p-2">CPI₂</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">2</td><td class="border border-slate-300 p-2">3</td><td class="border border-slate-300 p-2">4</td></tr>
        </tbody>
      </table>
    `,
    explanation: `
      <p><strong>计算加权平均 CPI (CPI<sub>avg</sub>)</strong></p>
      <p>公式：CPI<sub>avg</sub> = &sum; (CPI<sub>i</sub> &times; 所占比例<sub>i</sub>)</p>
      <p><strong>计算机1：</strong></p>
      <p>CPI<sub>1</sub> = 2 &times; 0.4 + 3 &times; 0.2 + 4 &times; 0.15 + 5 &times; 0.25 = 0.8 + 0.6 + 0.6 + 1.25 = 3.25</p>
      <p><strong>计算机2：</strong></p>
      <p>CPI<sub>2</sub> = 2 &times; 0.4 + 2 &times; 0.2 + 3 &times; 0.15 + 4 &times; 0.25 = 0.8 + 0.4 + 0.45 + 1.0 = 2.65</p>
      <p><strong>计算 MIPS</strong></p>
      <p>公式：MIPS = f / (CPI<sub>avg</sub> &times; 10<sup>6</sup>)</p>
      <p><strong>计算机1：</strong></p>
      <p>MIPS<sub>1</sub> = (600 &times; 10<sup>6</sup>) / (3.25 &times; 10<sup>6</sup>) = 600 / 3.25 &asymp; 184.6 &rarr; 185</p>
      <p><strong>计算机2：</strong></p>
      <p>MIPS<sub>2</sub> = (800 &times; 10<sup>6</sup>) / (2.65 &times; 10<sup>6</sup>) = 800 / 2.65 &asymp; 301.8 &rarr; 302</p>
    `
  },
  {
    id: 35,
    text: "已知数的补码表示形式，求数的真值。\n(1) [x]补 = 1.11111\n(2) [x]补 = 1.00000",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>(1) [x]<sub>补</sub> = 1.11111</strong></p>
      <ul class="list-disc pl-5">
        <li><strong>符号位</strong>为 1，表示负数。</li>
        <li><strong>数值位</strong>求原码：对补码数值位（11111）取反加1。</li>
        <li>取反：00000；加1：00001。即原码为 1.00001。</li>
        <li><strong>真值</strong>：-0.00001<sub>2</sub> （即 -2<sup>-5</sup> = -1/32）。</li>
      </ul>
      <p class="mt-2"><strong>(2) [x]<sub>补</sub> = 1.00000</strong></p>
      <ul class="list-disc pl-5">
        <li>这是一个特殊补码，符号位为 1，数值位全为 0。</li>
        <li>在定点小数中，规定该形式表示 -1。</li>
        <li><strong>推导逻辑</strong>：若按取反加1规则：00000 &rarr; 11111 + 0.00001 = 1.00000（溢出到整数位），即 -1.00000。</li>
        <li><strong>真值</strong>：-1.00000。</li>
      </ul>
    `
  },
  {
    id: 36,
    text: "用IEEE754 32位单精度浮点数标准表示十进制数 6 + 5/8",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>转换为二进制实数</strong></p>
      <ul class="list-disc pl-5">
        <li>整数部分：6 = 110<sub>2</sub></li>
        <li>小数部分：5/8 = 0.625 = 0.101<sub>2</sub></li>
        <li>合并：6 + 5/8 = 110.101<sub>2</sub></li>
      </ul>
      <p class="mt-2"><strong>规格化表示</strong></p>
      <ul class="list-disc pl-5">
        <li>小数点左移2位：1.10101 &times; 2<sup>2</sup></li>
        <li>此时，阶码真值 e = 2，尾数 M = 1.10101。</li>
      </ul>
      <p class="mt-2"><strong>确定各字段</strong></p>
      <ul class="list-disc pl-5">
        <li><strong>符号位 (S)</strong>：正数，取 0。</li>
        <li><strong>阶码 (E)</strong>：采用移码，E = e + 127 = 2 + 127 = 129。二进制为 10000001。</li>
        <li><strong>尾数 (F)</strong>：取规格化后小数点右边的部分，不足23位补0。即 10101 &rarr; 101 0100 ...</li>
      </ul>
      <p class="mt-2"><strong>结果</strong></p>
      <p>二进制：0 10000001 10101000000000000000000</p>
      <p>十六进制：40D40000H</p>
    `
  },
  {
    id: 37,
    text: "设8位有效信息为01101110，试写出它的海明校验码。",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>确定校验位位数</strong></p>
      <p>数据位 n=8，设校验位 k。公式 2<sup>k</sup> &ge; n + k + 1 &rArr; 2<sup>4</sup> &ge; 13。需 k=4 位，总长 12 位。</p>
      <p class="mt-2"><strong>校验位计算 (偶校验)</strong></p>
      <p>位分布：P1(1), P2(2), P4(4), P8(8) 为校验位。</p>
      <p>根据文档指错字逻辑及结果：0110 0111 1001，指错字 H3 D1 (0011)。</p>
      <p class="mt-2"><strong>错误检测与纠正</strong></p>
      <ul class="list-disc pl-5">
        <li>发送方：01101110 &rarr; 编码后</li>
        <li>接收方：01101111 (末位变1)。</li>
        <li>指错字计算：S<sub>4</sub>S<sub>3</sub>S<sub>2</sub>S<sub>1</sub> = 0011 (即3)。</li>
        <li>表示第3位出错。第3位对应数据位 D1 (或按海明码位号3)。</li>
        <li>纠错：将第3位取反即可。</li>
      </ul>
    `
  },
  {
    id: 38,
    text: "已知x和y，用变形补码（双符号位补码）计算x-y，并判断结果是否溢出\n(1) x=0.11011，y=0.11101\n(2) x=-0.11111，y=-0.11001",
    type: QuestionType.COMPLEX,
    explanation: `
      <p>公式：[x-y]<sub>补</sub> = [x]<sub>补</sub> + [-y]<sub>补</sub></p>
      <p class="mt-2"><strong>(1) x=0.11011，y=0.11101</strong></p>
      <ul class="list-disc pl-5">
        <li>[x]<sub>补</sub> = 00.11011</li>
        <li>[y]<sub>补</sub> = 00.11101 &rarr; [-y]<sub>补</sub> = 11.00011</li>
        <li>相加：00.11011 + 11.00011 = 11.11110</li>
        <li>判断：双符号位 11，无溢出。</li>
        <li>真值：-0.00010</li>
      </ul>
      <p class="mt-2"><strong>(2) x=-0.11111，y=-0.11001</strong></p>
      <ul class="list-disc pl-5">
        <li>[x]<sub>补</sub> = 11.00001</li>
        <li>[y]<sub>补</sub> = 11.00111 &rarr; [-y]<sub>补</sub> = 00.11001</li>
        <li>相加：11.00001 + 00.11001 = 11.11010</li>
        <li>判断：双符号位 11，无溢出。</li>
        <li>真值：-0.00110</li>
      </ul>
    `
  },
  {
    id: 39,
    text: "用原码一位乘计算x*y：x=-0.11010，y=-0.01011",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>确定符号位</strong></p>
      <p>Sign = 1 &oplus; 1 = 0 (正)。计算 |x| &middot; |y|。</p>
      <p class="mt-2"><strong>计算过程 (部分积 P, 乘数 Y)</strong></p>
      <ul class="list-disc pl-5">
        <li>初始：P=00.00000, Y=01011</li>
        <li>第1步 (Y末位1)：P+|x| -> 右移。P=00.01101</li>
        <li>第2步 (Y末位1)：P+|x| -> 右移。P=00.10011</li>
        <li>第3步 (Y末位0)：仅右移。P=00.01001</li>
        <li>第4步 (Y末位1)：P+|x| -> 右移。P=00.10001</li>
        <li>第5步 (Y末位0)：仅右移。P=00.01000</li>
      </ul>
      <p><strong>结果</strong></p>
      <p>拼接 P 和移出位，结合符号位：0.0100011110</p>
    `
  },
  {
    id: 40,
    text: "用补码一位乘计算x*y：x=0.10110，y=-0.00011",
    type: QuestionType.COMPLEX,
    explanation: `
      <p><strong>准备数据</strong></p>
      <p>[x]<sub>补</sub>=00.10110, [-x]<sub>补</sub>=11.01010, Y=11.11101, y<sub>n+1</sub>=0</p>
      <p class="mt-2"><strong>循环步骤 (Booth算法判断 y<sub>n</sub>y<sub>n+1</sub>)</strong></p>
      <ul class="list-disc pl-5">
        <li>第1步 (10)：P - x (即 +[-x]<sub>补</sub>) &rarr; 右移。P=11.10101</li>
        <li>第2步 (11)：仅右移。P=11.11010</li>
        <li>第3步 (11)：仅右移。P=11.11101</li>
        <li>第4步 (11)：仅右移。P=11.11110</li>
        <li>第5步 (11)：仅右移。P=11.11111</li>
      </ul>
      <p><strong>结果</strong></p>
      <p>组合结果：1.1110 1111 10</p>
    `
  },
  {
    id: 41,
    text: "写回法是什么？采用写回法会产生什么问题？",
    type: QuestionType.ESSAY,
    explanation: "写回法（Write-Back）是一种缓存更新策略，即在写操作时，数据首先被写入缓存，而不是立即写入主存。这可能造成cache中的数据副本与主存中数据不一致。"
  },
  {
    id: 42,
    text: "什么叫指令？什么叫指令系统？",
    type: QuestionType.ESSAY,
    explanation: "指令是指控制计算机执行某种操作的命令。一台计算机中所有指令的集合称为该计算机的指令系统。"
  },
  {
    id: 43,
    text: "简述易失性存储器与非易失性存储器",
    type: QuestionType.ESSAY,
    explanation: "易失性：断电丢失（SRAM, DRAM）。非易失性：断电不丢失（ROM, Flash）。"
  },
  {
    id: 44,
    text: "补码 10110100 的真值是多少？",
    type: QuestionType.ESSAY,
    explanation: "-(1001011 + 1) -> -1001100 -> -76"
  },
  {
    id: 45,
    text: "简述常见的操作数寻址方式",
    type: QuestionType.ESSAY,
    explanation: "直接寻址、立即寻址、寄存器寻址、间接寻址、寄存器间接寻址等。"
  },
  {
    id: 46,
    text: "cache的地址映射方式有哪些？",
    type: QuestionType.ESSAY,
    explanation: "直接相联映射、全相联映射、组相联映射。"
  },
  {
    id: 47,
    text: "列举常见的输入输出设备",
    type: QuestionType.ESSAY,
    explanation: "输入：鼠标、键盘。输出：打印机、显示器。"
  },
  {
    id: 48,
    text: "IEEE754浮点数的表示格式",
    type: QuestionType.ESSAY,
    explanation: "1.M × 2^e。尾数原码，阶码移码，符号位。"
  },
  {
    id: 49,
    text: "什么是正溢出和负溢出？",
    type: QuestionType.ESSAY,
    explanation: "正溢出：两正数相加结果为负。负溢出：两负数相加结果为正。"
  },
  {
    id: 50,
    text: "简述写策略中的写回法和写穿法",
    type: QuestionType.ESSAY,
    explanation: "写回法：只更新Cache，适时回写主存。写穿法：同时更新Cache和主存。"
  },
  {
    id: 51,
    text: "指令系统的指令功能条数如何计算？",
    type: QuestionType.ESSAY,
    explanation: "2^m，其中m为操作码位数。"
  },
  {
    id: 52,
    text: "cache的作用",
    type: QuestionType.ESSAY,
    explanation: "缓解CPU与主存速度不匹配的问题，利用局部性原理提高访问速度。"
  },
  {
    id: 53,
    text: "冯诺依曼体系结构的核心思想",
    type: QuestionType.ESSAY,
    explanation: "存储程序：将程序和数据以二进制形式存放在存储器中，自动执行。"
  },
  {
    id: 54,
    text: "GB2312编码特点",
    type: QuestionType.ESSAY,
    explanation: "双字节，最高位MSB均为1。"
  },
  {
    id: 55,
    text: "奇偶校验的原理",
    type: QuestionType.ESSAY,
    explanation: "通过增加校验位使1的个数为奇数或偶数。"
  },
  {
    id: 56,
    text: "大端方式和小端方式的区别",
    type: QuestionType.ESSAY,
    explanation: "大端：高字节存低地址。小端：低字节存低地址。"
  },
  {
    id: 57,
    text: "海明码校验位的位置",
    type: QuestionType.ESSAY,
    explanation: "2^0, 2^1, 2^2... 位置。"
  },
  {
    id: 58,
    text: "DRAM刷新特点",
    type: QuestionType.ESSAY,
    explanation: "按行进行。"
  },
  {
    id: 59,
    text: "CISC和RISC的区别",
    type: QuestionType.ESSAY,
    explanation: "CISC：复杂指令集。RISC：精简指令集。"
  },
  {
    id: 60,
    text: "程序计数器PC的作用",
    type: QuestionType.ESSAY,
    explanation: "保存下一条指令的地址。"
  },
  {
    id: 61,
    text: "什么是相联存储器？",
    type: QuestionType.ESSAY,
    explanation: "按内容进行访问的存储器。"
  },
  {
    id: 62,
    text: "简述高位多体交叉和低位多体交叉",
    type: QuestionType.ESSAY,
    explanation: "高位：容量扩展。低位：提升带宽（流水线访问）。"
  },
  {
    id: 63,
    text: "补码乘法的特点",
    type: QuestionType.ESSAY,
    explanation: "符号位参与运算。"
  },
  {
    id: 64,
    text: "原码和补码中0的表示",
    type: QuestionType.ESSAY,
    explanation: "原码0有两种（+0, -0），补码0只有一种。"
  },
  {
    id: 65,
    text: "系统总线的分类",
    type: QuestionType.ESSAY,
    explanation: "数据总线、地址总线、控制总线。"
  },
  {
    id: 66,
    text: "奇偶校验的局限性",
    type: QuestionType.ESSAY,
    explanation: "只能检测奇数位错误。"
  },
  {
    id: 67,
    text: "指令格式包含哪些基本信息？",
    type: QuestionType.ESSAY,
    explanation: "操作码（做什么）和地址码（对谁做）。"
  },
  {
    id: 68,
    text: "列举指令寻址方式和操作数寻址方式",
    type: QuestionType.ESSAY,
    explanation: "指令寻址：顺序、跳跃。操作数寻址：立即、直接、间接、寄存器、相对、基址、变址等。"
  }
];

export const extraQuestions: Question[] = [];
